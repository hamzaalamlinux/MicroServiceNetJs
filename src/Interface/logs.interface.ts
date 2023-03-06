import { Document } from 'mongoose';
export interface ILogs extends Document{
    readonly NotificationName: string;
    readonly status: string;
    readonly object: string;
}