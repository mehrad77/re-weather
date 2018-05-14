import ReWeather from "./index";

it("works with promises", () => {
  ReWeather({
    token: "ed448ed3e13cab6145f32ad6a8766fdc",
    city: "London"
  }).then(weather =>
    expect(data).toBeCalledWith(
      expect.objectContaining({
        name: expect.toBe("London"),
        wind: expect.toBeDefined(),
        main: expect.toBeDefined(),
        weather: expect.toBeDefined(),
      }),
    )
  )
});
