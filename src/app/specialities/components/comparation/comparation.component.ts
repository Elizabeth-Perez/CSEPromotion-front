import { Component, OnInit } from "@angular/core";
import { Certification, Frameworks, Functions, Ides, ProgrammingLanguages, Skill, Speciality } from "../../interfaces/specialities.interface";
import { SpecialitiesService } from "../../services/specialities.service";

@Component({
    selector: 'specialities-comparation',
    templateUrl: './comparation.component.html',
    styleUrls: ['./comparation.component.scss']
})
export class ComparationComponent implements OnInit {
    specialities: Speciality[] = [];
    functions: Functions[] = [];
    skills: Skill[] = [];
    programming: ProgrammingLanguages[] = [];
    ides: Ides[] = [];
    frameworks: Frameworks[] = [];
    certifications: Certification[] = [];

    currentProgramIndexes: number[] = [];
    currentIdesIndexes: number[] = [];
    currentFrameworksIndexes: number[] = [];

    constructor(
        private specialityService: SpecialitiesService,
    ) { }

    ngOnInit(): void {
        this.specialityService.getSpecialities().subscribe(res => {
            this.specialities = res;
            this.specialities.forEach(() => {
                this.currentProgramIndexes.push(0);
                this.currentIdesIndexes.push(0);
                this.currentFrameworksIndexes.push(0);
            });
        });
        this.specialityService.getFunctions().subscribe(res => {
            this.functions = res;
        });
        this.specialityService.getSkills().subscribe(res => {
            this.skills = res;
        });
        this.specialityService.getProgramming().subscribe(res => {
            this.programming = res;
        });
        this.specialityService.getIdes().subscribe(res => {
            this.ides = res;
        });
        this.specialityService.getFramewoks().subscribe(res => {
            this.frameworks = res;
        });
        this.specialityService.getCertifications().subscribe(res => {
            this.certifications = res;
        });
    }

    getFunctionsForSpeciality(keySpeciality: string): Functions[] {
        return this.functions.filter(func => func.speciality.keySpeciality === keySpeciality);
    }

    getSkillsForSpeciality(keySpeciality: string): Skill[] {
        return this.skills.filter(skill => skill.speciality.keySpeciality === keySpeciality);
    }

    getCertificationsForSpeciality(keySpeciality: string): Certification[] {
        return this.certifications.filter(skill => skill.speciality.keySpeciality === keySpeciality);
    }

    getProgrammingForSpeciality(keySpeciality: string): ProgrammingLanguages[] {
        let matchingSpecialities = this.programming.map(pl => pl.speciality.filter(s => s.keySpeciality === keySpeciality));
        let flattenedSpecialities = matchingSpecialities.flat();
        let filteredProgramming = this.programming.filter(pl => pl.speciality.some(s => flattenedSpecialities.includes(s)));
        return filteredProgramming;
    }

    getIdesForSpeciality(keySpeciality: string): Ides[] {
        let matchingSpecialities = this.ides.map(pl => pl.speciality.filter(s => s.keySpeciality === keySpeciality));
        let flattenedSpecialities = matchingSpecialities.flat();
        let filteredIdes = this.ides.filter(pl => pl.speciality.some(s => flattenedSpecialities.includes(s)));
        return filteredIdes;
    }

    getFrameworksForSpeciality(keySpeciality: string): Frameworks[] {
        let matchingSpecialities = this.frameworks.map(pl => pl.speciality.filter(s => s.keySpeciality === keySpeciality));
        let flattenedSpecialities = matchingSpecialities.flat();
        let filteredFrameworks = this.frameworks.filter(pl => pl.speciality.some(s => flattenedSpecialities.includes(s)));
        return filteredFrameworks;
    }

    backProgram(sectionIndex: number) {
        this.currentProgramIndexes[sectionIndex] = (this.currentProgramIndexes[sectionIndex] - 1 + this.getProgrammingForSpeciality(this.specialities[sectionIndex].keySpeciality).length) % this.getProgrammingForSpeciality(this.specialities[sectionIndex].keySpeciality).length;
    }

    nextProgram(sectionIndex: number) {
        this.currentProgramIndexes[sectionIndex] = (this.currentProgramIndexes[sectionIndex] + 1) % this.getProgrammingForSpeciality(this.specialities[sectionIndex].keySpeciality).length;
    }

    backIdes(sectionIndex: number) {
        this.currentIdesIndexes[sectionIndex] = (this.currentIdesIndexes[sectionIndex] - 1 + this.getIdesForSpeciality(this.specialities[sectionIndex].keySpeciality).length) % this.getIdesForSpeciality(this.specialities[sectionIndex].keySpeciality).length;
    }

    nextIdes(sectionIndex: number) {
        this.currentIdesIndexes[sectionIndex] = (this.currentIdesIndexes[sectionIndex] + 1) % this.getIdesForSpeciality(this.specialities[sectionIndex].keySpeciality).length;
    }

    backFrameworks(sectionIndex: number) {
        this.currentFrameworksIndexes[sectionIndex] = (this.currentFrameworksIndexes[sectionIndex] - 1 + this.getFrameworksForSpeciality(this.specialities[sectionIndex].keySpeciality).length) % this.getFrameworksForSpeciality(this.specialities[sectionIndex].keySpeciality).length;
    }

    nextFrameworks(sectionIndex: number) {
        this.currentFrameworksIndexes[sectionIndex] = (this.currentFrameworksIndexes[sectionIndex] + 1) % this.getFrameworksForSpeciality(this.specialities[sectionIndex].keySpeciality).length;
    }
}