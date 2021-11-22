import { BaseLogger } from "../cross_cutting_concerns/logging/logger.js"
import User from "../models/user_model.js"
import Customer from "../models/customer_model.js"
import UserService from "../services/user_service.js"

console.log("user component yüklendi")

let loggerService = new BaseLogger()
let userService = new UserService(loggerService)

let user1 = new User(1, "Emirhan", "Kalem", "İstanbul")
let user2 = new User(2, "Mami", "Kalem", "İstanbul")

userService.add(user1)
userService.add(user2)
    //console.log(userService.list())
    //console.log(userService.getById(1))
    //userService.list()


console.log("----------------------------")



userService.load()
let customerToAdd = new Customer(1, "Emir", "KALEM", "İstanbul", 23, "123456")
customerToAdd.type = "customer"
userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())