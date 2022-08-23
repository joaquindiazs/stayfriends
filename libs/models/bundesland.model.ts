export class BundeslandModel {
  accountDeactivated?: boolean;
  stateList?: State[];
  personIndexCounts?: PersonIndexCounts;
  redirect?: boolean;
  shpwMewTooltip?: boolean;
}

class State {
  count?: number;
  foreignCountry?: boolean;
  letter?: string;
  name?: string;
  schoolCount?: number;
  stadtStaat?: boolean;
  url?: string;
}

class PersonIndexCounts {
  [key: string]: number;
}
