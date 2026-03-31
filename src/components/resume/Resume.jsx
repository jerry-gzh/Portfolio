import React, { useState } from "react";
import "./Resume.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "./Button";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import WorkExperience from "./WorkExperience";

const Resume = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [t] = useTranslation("global");
    const language = i18next.language === "es" ? "es" : "en";
    const experiences = WorkExperience[language];

    const listVariants = {
        hidden: { opacity: 0, y: 10 },
        show: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.06 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">{t("Resume.experience")}</h2>

            <div className="resume__container">
                <Tabs
                    className="tabs"
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                    selectedTabClassName={"is-active"}
                    selectedTabPanelClassName={"is-active"}
                >
                    <TabList className="tab__list">
                        {experiences.map((experience, index) => {
                            const { id, company } = experience;
                            return (
                                <Tab className="tab" key={`company-${id}`}>
                                    <Button>{company}</Button>
                                </Tab>
                            );
                        })}
                    </TabList>

                    {experiences.map((experience) => {
                        const { id, company, yearsActive, title, information } = experience;
                        return (
                            <TabPanel className="tab__panel" key={`panel-${id}`}>
                                <h2 className="tab__panel-title">
                                    {title} @ {company}
                                </h2>
                                <p className="tab__panel-subtitle">{yearsActive}</p>
                                <motion.ul
                                    className="tab__panel-list"
                                    variants={listVariants}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    {information.map((info, index) => {
                                        return (
                                            <motion.li key={`info-${index}`} variants={itemVariants}>
                                                {info}
                                            </motion.li>
                                        );
                                    })}
                                </motion.ul>
                            </TabPanel>
                        );
                    })}
                </Tabs>
            </div>
        </section>
    );
};

export default Resume;
