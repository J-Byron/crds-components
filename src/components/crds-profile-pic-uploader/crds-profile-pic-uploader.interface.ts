export interface TitheUser {
  nickName: string;
  imageUrl: string;
  groups: Groups[];
  donations: Donation[]
  recurringGifts: RecurringGift[]
}
