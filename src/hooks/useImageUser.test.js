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

  it("should be return a default image", () => {
    const { result } = renderHook(() => useImageUser());
    const { image } = result.current;
    expect(image).toEqual(mockImageUser);
  });

  it("should be update image user", () => {
    const { result } = renderHook(() => useImageUser());
    const { updateImage } = result.current;

    mockUpdateImage.mockImplementation((url) => {
      mockImageUser.url = url;
    });

    const anotherImage = "/another-image.png";

    act(() => {
      updateImage(anotherImage);
    });

    expect(mockUpdateImage).toHaveBeenCalledTimes(1);
    expect(mockUpdateImage).toHaveBeenCalledWith(anotherImage);
    expect(result.current.image).toEqual({ url: anotherImage });
  });
});
