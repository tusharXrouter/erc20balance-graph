import { Transfer } from "../generated/DFYNToken/DFYNToken"
import { TokenBalance } from "../generated/schema"
import { BigInt, Address } from "@graphprotocol/graph-ts"

export function handleTransfer(event: Transfer): void {
  let fromAddress = event.params.from
  let toAddress = event.params.to

  // Filter out zero addresses
  if (fromAddress.equals(Address.zero()) || toAddress.equals(Address.zero())) {
    return
  }

  let fromId = fromAddress.toHex()
  let toId = toAddress.toHex()

  let fromBalance = TokenBalance.load(fromId)
  if (fromBalance == null) {
    fromBalance = new TokenBalance(fromId)
    fromBalance.user = fromAddress
    fromBalance.balance = BigInt.fromI32(0)
    fromBalance.timestamp = event.block.timestamp
  }

  let toBalance = TokenBalance.load(toId)
  if (toBalance == null) {
    toBalance = new TokenBalance(toId)
    toBalance.user = toAddress
    toBalance.balance = BigInt.fromI32(0)
    toBalance.timestamp = event.block.timestamp
  }

  fromBalance.balance = fromBalance.balance.minus(event.params.value)
  fromBalance.timestamp = event.block.timestamp

  toBalance.balance = toBalance.balance.plus(event.params.value)
  toBalance.timestamp = event.block.timestamp

  fromBalance.save()
  toBalance.save()
}
