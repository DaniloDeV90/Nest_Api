/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';


export class CreateTeamMemberBodyDto {

    @IsNotEmpty({
        message: "vai ti fude"
    })
    name: string;
    @IsNotEmpty({
        message: "Sem funcap"
    })
    function: string;
}
