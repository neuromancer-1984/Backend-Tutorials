import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      typeof: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const SubTodo = mongoose.model('SubTodo', subTodoSchema);
