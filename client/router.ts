import { Router, Request, Response } from 'express';
import { logger } from '../utils/logger';
import { client } from './client';
const route = Router();
route.get("/", (_request: Request, response: Response) => {
  client.getAll('', (err, data) => {
    if (err) throw err;
    logger.info({
      level: 'info',
      message: JSON.stringify(data)
    });
    response.render("customers", {
      results: data?.custumers
    });

  });
});

route.post("/save", (request: Request, response: Response) => {
  let newCustomer = {
    id: '',
    name: request.body.name,
    age: request.body.age,
    address: request.body.address
  };

  client.insert(newCustomer, (err, data) => {
    if (err) throw err;
    logger.info({
      level: 'info',
      message: JSON.stringify(data)
    });
    console.log("Customer created successfully", data);
    response.redirect("/");
  });
});

route.post("/update", (request: Request, response: Response) => {
  const updateCustomer = {
    id: request.body.id,
    name: request.body.name,
    age: request.body.age,
    address: request.body.address
  };

  client.update(updateCustomer, (err, data) => {
    if (err) throw err;
    logger.info({
      level: 'info',
      message: JSON.stringify(data)
    });
    console.log("Customer updated successfully", data);
    response.redirect("/");
  });
});

route.post("/remove", (request: Request, response: Response) => {
  client.remove({ id: request.body.customer_id }, (err, _) => {
    if (err) throw err;

    console.log("Customer removed successfully");
    response.redirect("/");
  });
});

export { route }