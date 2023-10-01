"use client";

import ProjectType from "@/types/ProjectType"
import { calculateCountOfDevelopers, calculateEfforts, calculateTimeForDeveloping } from "@/utils/BasicModel"
import { useState } from "react"

function ConstructiveCostModelForm() {
    const [codeSize, setCodeSize] = useState<number>(0)
    const [projectType, setProjectType] = useState<ProjectType>("Organic")

    const effort = calculateEfforts(codeSize, projectType)
    const timeForDeveloping = calculateTimeForDeveloping(codeSize, projectType)
    const countOfDelelopers = calculateCountOfDevelopers(codeSize, projectType)

    return (
        <form className="cocomo-form">
            <div className="cocomo-form__fields">
                <div className="cocomo-form-field">
                    <label htmlFor="projectType">Тип проекту</label>
                    <select
                        id="projectType"
                        onChange={(e) => setProjectType(e.target.value as ProjectType)}
                        value={projectType}
                    >
                        <option value="Organic">Розповсюджений</option>
                        <option value="Semidetached">Напівнезалежний</option>
                        <option value="Embedded">Вбудований</option>
                    </select>
                </div>

                <div className="cocomo-form-field">
                    <label htmlFor="linesOfCode">Кількість рядків коду (тисяч)</label>
                    <input
                        id="linesOfCode"
                        type="number"
                        min={0}
                        value={codeSize}
                        onChange={(e) => setCodeSize(Number(e.target.value))}
                    />
                </div>
            </div>

            <div className="cocomo-form__split"></div>

            <div className="cocomo-form__results">
                <div className="cocomo-form-field">
                    <label htmlFor="effort">Трудоємність</label>
                    <output id="effort">
                        {
                            Number.isNaN(effort)
                                ? "0.000 ≈ 0"
                                : effort.toFixed(3) + " ≈ " + Math.ceil(effort)
                        }
                    </output>
                </div>

                <div className="cocomo-form-field">
                    <label htmlFor="timeForDeveloping">Тривалість</label>
                    <output id="timeForDeveloping">
                        {
                            Number.isNaN(timeForDeveloping)
                                ? "0.000 ≈ 0"
                                : timeForDeveloping.toFixed(3) + " ≈ " + Math.ceil(timeForDeveloping)
                        }
                    </output>
                </div>

                <div className="cocomo-form-field">
                    <label htmlFor="countOfDelelopers">Кількість розробників</label>
                    <output id="countOfDelelopers">
                        {
                            Number.isNaN(countOfDelelopers)
                                ? "0.000 ≈ 0"
                                : countOfDelelopers.toFixed(3) + " ≈ " + Math.ceil(countOfDelelopers)
                        }
                    </output>
                </div>
            </div>

        </form>
    )
}

export default ConstructiveCostModelForm