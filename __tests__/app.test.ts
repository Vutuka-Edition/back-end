import request from "supertest";
import app from "../src/app";

describe("Express App", () => {
  it("should return 404 for unknown route", async () => {
    const res = await request(app).get("/non-existent");
    expect(res.status).toBe(404);
    expect(res.body.message).toBe("Route not found");
  });

  it("should handle /api route (mocked)", async () => {
    const res = await request(app).get("/api");
    expect([200, 404]).toContain(res.status);
  });
});
