import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: { type: Date, default: Date.now },
  },
  { collection: "images" }
);

const ImageModel = mongoose.model("Image", ImageSchema);

export default ImageModel;