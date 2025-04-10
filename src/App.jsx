import React, { useState } from 'react';
import { Mail, Github, Linkedin, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, Element } from 'react-scroll';

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import { Carrousel, CarrouselItem, CarrouselSuivant, CarrouselPrecedent } from '@/components/ui/Carrousel';
import { Dialogue, DialogueTitle, DialogueContent, DialogueFooter } from "@/components/ui/Dialogue";

const Section = ({ title, children }) => (
    <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='container mx-auto py-12 px-6'
    >
        <h2 className='text-4xl font-bold mb-6 border-b-2 pb-2'>{title}</h2>
        {children}
    </motion.section>
);

const App = () => {
    const [isWebRadioOpen, setIsWebRadioOpen] = useState(false);
    const [isCasamenceOpen, setIsCasamenceOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <header className="fixed top-0 w-full bg-white shadow-md py-4 px-6 flex justify-between items-center z-50">
                <h1 className="text-2xl font-bold">Dumond Camille - BTS SIO</h1>
                <nav className="hidden md:flex gap-6">
                    <Link to="Accueil" smooth={true} duration={500}><Button variant="ghost">Accueil</Button></Link>
                    <Link to="Profil" smooth={true} duration={500}><Button variant="ghost">Profil</Button></Link>
                    <Link to="BTS_SIO" smooth={true} duration={500}><Button variant="ghost">BTS SIO</Button></Link>
                    <Link to="Parcours" smooth={true} duration={500}><Button variant="ghost">Parcours</Button></Link>
                    <Link to="Competences" smooth={true} duration={500}><Button variant="ghost">Compétences</Button></Link>
                    <Link to="Projets" smooth={true} duration={500}><Button variant="ghost">Projets</Button></Link>
                    <Link to="Epreuves" smooth={true} duration={500}><Button variant="ghost">Épreuves</Button></Link>
                    <Link to="Contact" smooth={true} duration={500}><Button variant="ghost">Contact</Button></Link>
                </nav>
                <Menu className="md:hidden w-6 h-6" />
            </header>

            <Element name='Accueil'>
                <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6">
                    <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-5xl font-bold">Bienvenue sur mon Portfolio</motion.h2>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="text-lg mt-4 max-w-2xl">
                        Étudiant en BTS SIO, passionné par l'informatique et les nouvelles technologies.
                    </motion.p>
                </section>
            </Element>

            <Element name='Profil'>
                <Section title="Profil">
                    <p>Étudiant en BTS SIO, passionné par le développement et les nouvelles technologies.</p>
                    <p><strong>Centre d'intérêts :</strong> Programmation, cybersécurité, jeux vidéo.</p>
                    <p><strong>Qualités :</strong> Curieux, rigoureux, autonome.</p>
                </Section>
            </Element>

            <Element name='BTS_SIO'>
                <Section title="BTS SIO">
                    <p>Le BTS Services Informatiques aux Organisations forme aux métiers de l’informatique.</p>
                    <p><strong>SLAM :</strong> Développement d’applications, gestion de bases de données.</p>
                    <p><strong>SISR :</strong> Administration de réseaux, sécurité informatique.</p>
                </Section>
            </Element>

            <Element name='Parcours'>
                <Section title="Parcours">
                    <p><strong>Scolaire :</strong> Bac spécialité NSI, BTS SIO.</p>
                    <p><strong>Stages :</strong> Expérience en entreprise dans le développement web et la cybersécurité.</p>
                </Section>
            </Element>

            <Element name='Competences'>
                <Section title="Compétences">
                    <p><strong>Cours :</strong> React, JavaScript, MySQL, administration système.</p>
                    <p><strong>Auto-formation :</strong> Python, DevOps, automatisation.</p>
                </Section>
            </Element>

            <Element name='Projets'>
                <Section title="Projets">
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        <Card className="shadow-lg h-auto">
                            <CardTitle>Web Radio</CardTitle>
                            <CardContent>Ce projet à eu pour but de nous faire réfléchir au fonctionnement de serveurs de streaming</CardContent>
                            <CardFooter>
                                <Button variant="outline" onClick={() => setIsWebRadioOpen(true)}>Voir plus</Button>
                            </CardFooter>
                        </Card>
                        <Card className="shadow-lg h-auto">
                            <CardTitle>Projet Casamence</CardTitle>
                            <CardContent>En collaboration avec l'association des anciens et les amis de la Casamence</CardContent>
                            <CardFooter>
                                <Button variant="outline" onClick={() => setIsCasamenceOpen(true)}>Voir plus</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </Section>
            </Element>

            <Element name='Epreuves'>
                <Section title="Épreuves">
                    <p><strong>E4 :</strong> Étude de cas technique.</p>
                    <p><strong>E5 :</strong> Gestion de projet informatique.</p>
                </Section>
            </Element>

            <Element name='Contact'>
                <footer className="bg-gray-900 text-white py-10 text-center">
                    <h2 className="text-2xl font-semibold">Contact</h2>
                    <div className="flex justify-center gap-6 mt-4">
                        <Mail className="w-6 h-6 text-white" />
                        <Github className="w-6 h-6 text-white" />
                        <Linkedin className="w-6 h-6 text-white" />
                    </div>
                </footer>
            </Element>

            <Dialogue isOpen={isWebRadioOpen} onClose={() => setIsWebRadioOpen(false)}>
                <DialogueTitle>Web Radio</DialogueTitle>
                <DialogueContent>
                    <Carrousel interval={6000} fit="cover" aspectRatio="16/9" className="max-h-[320px]">
                        <CarrouselPrecedent />
                        <CarrouselItem>
                            <media type="image" src="/image/img1.jpg">Début du projet</media>
                        </CarrouselItem>
                        <CarrouselItem>
                            <media type="video" src="/video/intro.mp4" unmute={true}>Vidéo explicative</media>
                        </CarrouselItem>
                        <CarrouselSuivant />
                    </Carrousel>
                    <p className="mt-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, illo soluta? Eligendi dignissimos mollitia corrupti debitis, repudiandae atque nemo ea odit! Id nisi voluptatibus, voluptatem commodi cumque iste dolorum amet.</p>
                </DialogueContent>
                <DialogueFooter>
                    <Button variant="outline" onClick={() => setIsWebRadioOpen(false)}>Fermer</Button>
                </DialogueFooter>
            </Dialogue>

            <Dialogue isOpen={isCasamenceOpen} onClose={() => setIsCasamenceOpen(false)}>
                <DialogueTitle>Web Radio</DialogueTitle>
                <DialogueContent>
                    <Carrousel interval={6000} fit="cover" aspectRatio="16/9" className="max-h-[320px]">
                        <CarrouselPrecedent />
                        <CarrouselItem>
                            <media type="image" src="/image/img1.jpg">Début du projet</media>
                        </CarrouselItem>
                        <CarrouselItem>
                            <media type="video" src="/video/intro.mp4" unmute={true}>Vidéo explicative</media>
                        </CarrouselItem>
                        <CarrouselSuivant />
                    </Carrousel>
                    <p className="mt-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, illo soluta? Eligendi dignissimos mollitia corrupti debitis, repudiandae atque nemo ea odit! Id nisi voluptatibus, voluptatem commodi cumque iste dolorum amet.</p>
                </DialogueContent>
                <DialogueFooter>
                    <Button variant="outline" onClick={() => setIsCasamenceOpen(false)}>Fermer</Button>
                </DialogueFooter>
            </Dialogue>

        </div>
    );
};

export default App;
