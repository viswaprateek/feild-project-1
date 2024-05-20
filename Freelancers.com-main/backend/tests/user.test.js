
require("dotenv").config();

const mongoose = require("mongoose");
const request = require("supertest");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const app = require("../server");
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

/* Connecting to a new in-memory database before running any tests. */
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

/* Closing the connection and stopping the in-memory database after all tests are done. */
afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe("User Registration and Login", () => {
  describe("Registration", () => {
    it("should register a new user successfully", async () => {
      const userData = {
        email: "newuser@example.com",
        password: "securepassword",
        name: "New User",
        role: "user",
        profile: {
          bio: "New user bio",
          skills: ["Node.js", "React"],
          portfolio: ["Project A", "Project B"],
        },
      };

      const response = await request(app)
        .post("/user-api/auth/signup")
        .send(userData)
        .expect(201);

      expect(response.body.token).toBeDefined();
      expect(response.body.id).toBeDefined();
      expect(response.body.role).toBe(userData.role);
      expect(response.body.name).toBe(userData.name);

      // Verifying if the password is hashed
      const user = await User.findOne({ email: userData.email });
      expect(user).toBeTruthy();
      expect(user.password).not.toBe(userData.password);
    });

    it("should reject registration with an existing email", async () => {
      const userData = {
        email: "existing@example.com",
        password: "password123",
        name: "Existing User",
        role: "user",
        profile: {
          bio: "Existing bio",
          skills: ["HTML", "CSS"],
          portfolio: ["Website 1", "Website 2"],
        },
      };

      await User.create({
        ...userData,
        password: await bcrypt.hash(userData.password, 10),
      });

      const response = await request(app)
        .post("/user-api/auth/signup")
        .send(userData)
        .expect(409);

      expect(response.body.message).toBe("Email already in use");
    });
  });

  describe("Login", () => {
    it("should login successfully with valid credentials", async () => {
      const userData = {
        name: "ValidUser",
        password: "validPassword",
        email: "valid@example.com",
        role: "user",
      };

      // const hashedPassword = await bcrypt.hash(userData.password, 10);
      await User.create({ ...userData});

      const response = await request(app)
        .post("/user-api/auth/login")
        .send({ name: userData.name, password: userData.password })
        .expect(200);

      expect(response.body.token).toBeDefined();
      expect(response.body.id).toBeDefined();
      expect(response.body.role).toBe(userData.role);
      expect(response.body.name).toBe(userData.name);
    });

    it("should reject login with invalid credentials", async () => {
      const userData = {
        name: "ValidUser",
        password: "validPassword",
        email: "valid@example.com",
        role: "user",
      };

      // const hashedPassword = await bcrypt.hash(userData.password, 10);
      // await User.create({ ...userData, password: hashedPassword });

      const response = await request(app)
        .post("/user-api/auth/login")
        .send({ name: userData.name, password: "invalidPassword" })
        .expect(401);

      expect(response.body.message).toBe("Invalid credentials");
    });

    it("should not login a non-existent user", async () => {
      const response = await request(app)
        .post("/user-api/auth/login")
        .send({ name: "NonExistentUser", password: "password123" })
        .expect(404);

      expect(response.body.message).toBe("User not found");
    });
  });
});
