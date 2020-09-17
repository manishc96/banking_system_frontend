export interface ITranscation {
    id?: number,
    user_id: number;
    accType: string,
    deposit?: number,
    withdraw?: number,
    balance_amount?: number
}