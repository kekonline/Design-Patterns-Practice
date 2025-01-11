// orderService.js
class OrderService {
  constructor(orderRepository) {
    this.orderRepository = orderRepository; // Port
  }

  async createOrder(orderDetails) {
    // Business logic
    if (!orderDetails.item || orderDetails.quantity <= 0) {
      throw new Error("Invalid order details");
    }

    const order = {
      id: Date.now(),
      ...orderDetails,
      status: "pending",
    };

    return await this.orderRepository.saveOrder(order); // Use the port
  }

  async getOrderById(orderId) {
    return await this.orderRepository.findOrderById(orderId); // Use the port
  }
}

export default OrderService;


// orderRepositoryPort.js
export class OrderRepositoryPort {
  saveOrder(order) {
    throw new Error("saveOrder() must be implemented");
  }

  findOrderById(orderId) {
    throw new Error("findOrderById() must be implemented");
  }
}


// inMemoryOrderRepository.js
import { OrderRepositoryPort } from "./orderRepositoryPort.js";

class InMemoryOrderRepository extends OrderRepositoryPort {
  constructor() {
    super();
    this.orders = [];
  }

  async saveOrder(order) {
    this.orders.push(order);
    return order;
  }

  async findOrderById(orderId) {
    return this.orders.find(order => order.id === orderId);
  }
}

export default InMemoryOrderRepository;


// expressAdapter.js
import express from "express";
import OrderService from "./orderService.js";
import InMemoryOrderRepository from "./inMemoryOrderRepository.js";

const app = express();
app.use(express.json());

// Dependency injection of the adapter
const orderRepository = new InMemoryOrderRepository();
const orderService = new OrderService(orderRepository);

app.post("/orders", async (req, res) => {
  try {
    const order = await orderService.createOrder(req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/orders/:id", async (req, res) => {
  const order = await orderService.getOrderById(Number(req.params.id));
  if (!order) {
    return res.status(404).json({ error: "Order not found" });
  }
  res.json(order);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



