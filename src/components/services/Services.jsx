import React from 'react';
import './Services.css';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { motion } from "framer-motion";
import {
    RiGitMergeLine,
    RiServerLine,
    RiRadarLine,
    RiShieldKeyholeLine,
    RiCloudLine,
} from "react-icons/ri";


const es = [
    {
        id: 1,
        icon: <RiGitMergeLine />,
        title: "CI/CD y Automatización",
        description:
            "Diseño e implementación de pipelines para despliegues confiables en entornos híbridos.",
    },
    {
        id: 2,
        icon: <RiServerLine />,
        title: "Infraestructura como Código",
        description:
            "Provisionamiento reproducible con Terraform/ARM y control de cambios en Git.",
    },
    {
        id: 3,
        icon: <RiRadarLine />,
        title: "Observabilidad y Monitoreo",
        description:
            "Métricas, logs y alertas con Prometheus, Grafana, Loki y Alertmanager.",
    },
    {
        id: 4,
        icon: <RiShieldKeyholeLine />,
        title: "Seguridad y Accesos",
        description:
            "Gestión de secretos, permisos y controles de identidad para entornos críticos.",
    },
    {
        id: 5,
        icon: <RiCloudLine />,
        title: "Plataformas Cloud",
        description:
            "Administración de servicios PaaS/SaaS en Azure y soporte a operaciones.",
    }
];

const en = [
    {
        id: 1,
        icon: <RiGitMergeLine />,
        title: "CI/CD and Automation",
        description:
            "Design and implementation of reliable pipelines for hybrid environments.",
    },
    {
        id: 2,
        icon: <RiServerLine />,
        title: "Infrastructure as Code",
        description:
            "Reproducible provisioning with Terraform/ARM and Git-based change control.",
    },
    {
        id: 3,
        icon: <RiRadarLine />,
        title: "Observability and Monitoring",
        description:
            "Metrics, logs, and alerting with Prometheus, Grafana, Loki, and Alertmanager.",
    },
    {
        id: 4,
        icon: <RiShieldKeyholeLine />,
        title: "Security and Access",
        description:
            "Secrets, permissions, and identity controls for critical workloads.",
    },
    {
        id: 5,
        icon: <RiCloudLine />,
        title: "Cloud Platforms",
        description:
            "Azure PaaS/SaaS administration and operational support.",
    }
];

//🤖🤖



const Services = () => {

    const [t] = useTranslation("global");
    let data = [];
    (i18next.language === 'es')? data = es : data = en;

    const containerVariants = {
        hidden: { opacity: 0, y: 12 },
        show: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.08 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0 },
    };
    
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">{t('Services.services')}</h2>

            <motion.div
                className="services__container grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {data.map(({ id, icon, title, description }) => {
                    return (
                        <motion.div className="services__card" key={id} variants={itemVariants}>
                            <div className="services__icon" aria-hidden="true">
                                {icon}
                            </div>

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </motion.div>
                    )
                })}
            </motion.div>
        </section>
    )
}

export default Services
