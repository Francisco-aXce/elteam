import { BasicTeam } from "./team.model";

export interface UserAsPlayer {
  id: string;
  firstName: string;
  lastName: string;
  nickName: string;
  country: string;
  team: BasicTeam,
}
