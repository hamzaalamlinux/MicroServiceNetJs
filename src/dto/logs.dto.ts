import { IsDate, IsNotEmpty, IsNumber, IsObject, IsString, MaxLength } from "class-validator";
export class LogsDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly  NotificationName: string;
    @IsString()
    @IsNotEmpty()
    readonly status: string;
    
    @IsObject()
    @IsNotEmpty()
    readonly notificationEvent: object;

    @IsString()
    @IsNotEmpty()
    readonly DateTime : string;
}

export const LogsDtos = LogsDto;