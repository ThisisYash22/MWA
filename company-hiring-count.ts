export class PlacementDetails {
    SrNumber:number;
    PRN: string;
    Name: string;
    Company: string;
    Package: number;

    constructor(SrNumber:number, PRN:string ,Name:string, Company:string,
        Package:number){
            this.SrNumber = SrNumber;
            this.PRN = PRN;
            this.Name = Name;
            this.Company = Company;
            this.Package = Package;
    }
}