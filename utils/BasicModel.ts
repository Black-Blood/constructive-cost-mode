import ProjectType from "@/types/ProjectType";
import Coefficients from "@/data/сoefficients.json"

export const calculateEfforts = (codeSize: number, type: ProjectType) => (
    Coefficients[type].a * Math.pow(codeSize, Coefficients[type].b)
)

export const calculateTimeForDeveloping = (codeSize: number, type: ProjectType) => (
    Coefficients[type].c * Math.pow(calculateEfforts(codeSize, type), Coefficients[type].d)
)

export const calculateCountOfDevelopers = (codeSize: number, type: ProjectType) => (
    calculateEfforts(codeSize, type) / calculateTimeForDeveloping(codeSize, type)
) 
