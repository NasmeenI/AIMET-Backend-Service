import { IsString } from "class-validator";

export class CreateHistoryFlagDto {
    @IsString()
    name: string;
}
