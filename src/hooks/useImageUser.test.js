import { cleanup } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useImageUser } from "./useImageUser.js";

jest.mock("./useImageUser.js", () => ({
  useImageUser: () => ({
    image: mockImageUser,
    updateImage: mockUpdateImage,
  }),
}));

const mockImageUser = { url: "/images/user-unknown.png" };
const mockUpdateImage = jest.fn();

describe("useImageUser", () => {
  afterEach(cleanup);

  it("should be render a image user", () => {
    const { result } = renderHook(() => useImageUser());
    const { image } = result.current;
    expect(image).toEqual(mockImageUser);
  });

  it("should be update image user", () => {
    const { result } = renderHook(() => useImageUser());
    const { updateImage } = result.current;
    
    act(() => {
      updateImage(mockImageUser);
    });

    expect(mockUpdateImage).toHaveBeenCalledTimes(1);
    expect(mockUpdateImage).toHaveBeenCalledWith(mockImageUser);
  })
});
