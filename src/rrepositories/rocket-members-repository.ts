export abstract class rocket_member_repository {
  abstract addMember(name: string, memberFucntion: string): Promise<void>;
}
