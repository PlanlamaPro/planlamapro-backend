import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: { type: Date, default: Date.now },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
  },
  { collection: "comments" }
);

const CommentModel = mongoose.model("Comment", CommentSchema);

export default CommentModel;