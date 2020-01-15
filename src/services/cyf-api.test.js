import { getStudents, getStudentById, getSteps } from "./cyf-api";

describe("Services CYF Api", () => {
  describe("getStudents", () => {
    test("is a function", () => {
      expect(getStudents).toEqual(expect.any(Function));
    });

    test("array of object", async () => {
      const result = await getStudents();
      expect(result).toEqual(expect.any(Array));
    });
  });

  describe("getStudentById", () => {
    test("is a function", () => {
      expect(getStudentById).toEqual(expect.any(Function));
    });

    test("undefined if no id is passed", async () => {
      const result = await getStudentById(undefined);
      expect(result).not.toBeDefined();
    });

    test("object if no existing id is passed", async () => {
      const result = await getStudentById("5c51dd106a3791001cd3a6f0");
      expect(result).toEqual(expect.any(Object));
    });
  });

  describe("getSteps", () => {
    test("is a function", () => {
      expect(getSteps).toEqual(expect.any(Function));
    });

    test("array of object", async () => {
      const result = await getSteps();
      expect(result).toEqual(expect.any(Array));
    });
  });
});
