export default function getTicketInfo(ticketId: string| number){
  if (typeof ticketId === "string") {
    const parsedId= parseInt(ticketId.split("-")[1]);
    return parsedId;
  } else {
    return ticketId;
  }
}