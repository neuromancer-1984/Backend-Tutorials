import mongoose from 'mongoose';

const orderItemschema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderItems: {
      type: [orderItemschema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['PENDING', 'CANCELLED', 'DELIVERED'],
      default: 'PENDING',
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
