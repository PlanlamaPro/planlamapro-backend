const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    roomName: { type: String, required: true },
    startDate: { type: Date, required: true },
    createdAt: { type: Date, required: false, default: Date.now },
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    description: { type: String, required: true },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
        default: [],
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        required: false,
        default: [],
      },
    ],
    images: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image",
        required: false,
        default: [],
      },
    ],
    nodes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TimeNode",
        required: false,
        default: [],
      },
    ],
    edges: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "NodeEdge",
        required: false,
        default: [],
      },
    ],
  },
  { collection: "eventroom" }
);

const RoomModel = mongoose.model("Room", roomSchema);

module.exports = RoomModel;
