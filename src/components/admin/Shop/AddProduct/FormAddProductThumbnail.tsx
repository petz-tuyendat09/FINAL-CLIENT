interface FormAddProductImageProps {
  inputName: string;
}

export default function FormAddProductImage({
  inputName,
}: FormAddProductImageProps) {
  return (
    <div className="form-group bg-white p-4">
      <div>
        <h1 className="text-2xl">Product Image</h1>
        <div className="group relative space-y-2">
          <div className="absolute bottom-0 left-0 right-0 top-0 rounded-xl opacity-35 transition delay-75 duration-300 group-hover:bg-stone-700" />
          <label
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 cursor-pointer rounded-lg bg-primary px-4 py-2 opacity-0 transition delay-75 duration-300 group-hover:block group-hover:-translate-y-8 group-hover:opacity-100"
            htmlFor="product-img"
          >
            Select
          </label>
          <img
            className="rounded-xl"
            src={imagePreview}
            alt="Sản phẩm không có hình ảnh"
          />
        </div>
        <input
          onChange={handleImageChange}
          id="product-img"
          name="productImage"
          className="hidden"
          type="file"
        />
      </div>
      <div className="flex w-full">
        <FormAddProductImage />
      </div>
    </div>
  );
}
