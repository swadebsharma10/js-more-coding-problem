/*
1.if ticket number is less than 100, per ticket price:100tk.
2.if ticket price is more than 100 and less than 200, per ticket
price: 90tk.
3.if you parches more than 200, per ticket price : 70 tk;
    first100 = 100tk
    second100 = 90tk
    200+ = 70 tk;
*/ 

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <=100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if (ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        // BE ATTENTION
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price =100 * second100Rate;
        // BE ATTENTION
        const restTicketQuantity = ticketQuantity -200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}
const price = ticketPrice(210);
console.log(price);