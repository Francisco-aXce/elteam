export interface Team extends BasicTeam {
  name: string;
  country: string;
  games: string;
  tournaments: number;
}

export interface BasicTeam {
  id: string;
  nameShort: string;
  logo?: string;
}
