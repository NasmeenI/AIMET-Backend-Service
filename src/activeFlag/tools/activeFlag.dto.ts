import { IsOptional, IsString, IsNumber } from "class-validator";

export class CreateFlagDto {
    @IsString()
    name: string;

    @IsNumber()
    priority: number;
}

export class EditFlagDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsNumber()
    priority?: number;
}