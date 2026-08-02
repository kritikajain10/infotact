const request = require("supertest");
const app = require("../server");

describe("FleetDash API", () => {
  test("GET / should return API running message", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("FleetDash API Running");
  });
});
const mongoose = require("mongoose");

afterAll(async () => {
  await mongoose.connection.close();
});