export type Weapon = {
  id: string,
  name: string,
  image: string,
  description: string,
  category: string,
  weight: number,
  attack: {name: string, damageWhenEquipped: number},
  defence: {name:string, damageBlocked: number},
  requiredAttributes: {name: string, amount: number},
  scalesWith: {name: string, scaling: string}

}
