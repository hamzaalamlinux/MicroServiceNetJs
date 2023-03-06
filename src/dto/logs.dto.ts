import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
export class LogsDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly  NotificationName: string;
    @IsString()
    @IsNotEmpty()
    readonly status: string;
    
    @IsString()
    @IsNotEmpty()
    readonly object: string;
}

export const LogsDtos = LogsDto;