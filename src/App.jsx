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
    const [isVPNOpen, setIsVPNOpen] = useState(false);
    const [isOfficeNetworkOpen, setIsOfficeNetworkOpen] = useState(false);
    const [isNetworkOpen, setIsNetworkOpen] = useState(false);
    const [isMCServOpen, setIsMCServOpen] = useState(false);
    const [isPersonnalServOpen, setIsPersonalServOpen] = useState(false);

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
                    <p>Moi c'est <strong>Camille</strong> !</p>
                    <p className="mt-2">
                        Actuellement étudiant au <a href="https://www.lycee-sidoine-apollinaire.fr/" className="underline">lycée Sidoine Apollinaire</a> de Clermont-Ferrand, je suis en 2ème année de BTS SIO SISR (Solutions d’Infrastructure Systèmes et Réseaux).
                    </p>
                    <p className="mt-2">
                        Depuis tout petit dans le monde de l’informatique, d’abord aux côtés de mon père, puis en autodidacte à partir du collège, j’ai décidé de faire de ma passion mon métier.
                    </p>

                    <div className="mt-6">
                        <h3 className="text-2xl font-semibold mb-2">Centres d’intérêts</h3>
                        <ul className="list-disc ml-6 space-y-1">
                            <li><strong>Musique :</strong> J’écoute de la musique quotidiennement</li>
                            <li><strong>Programmation :</strong> J’aime créer des petits projets de code sur mon temps libre</li>
                            <li><strong>Nouvelles Technologies :</strong> Je m'intéresse beaucoup à l'IA et aux innovations récentes</li>
                            <li><strong>Sport Mécanique :</strong> F1, WEC, rallye, drift… tout ce qui a un moteur m’attire</li>
                        </ul>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-2xl font-semibold mb-2">Qualités</h3>
                        <ul className="list-disc ml-6 space-y-1">
                            <li><strong>Autodidacte :</strong> J’aime apprendre seul, dans tous les domaines</li>
                            <li><strong>Curieux :</strong> J’essaie de comprendre le fonctionnement de ce qui m’entoure</li>
                            <li><strong>Flexible :</strong> Mon côté touche-à-tout m’aide à m’adapter facilement</li>
                        </ul>
                    </div>
                </Section>
            </Element>

            <Element name='BTS_SIO'>
                <Section title="BTS SIO">
                    <p>
                        Le <strong>Brevet de Technicien Supérieur Services Informatiques aux Organisations</strong> (BTS SIO) est une formation en 2 ans
                        pour devenir administrateur réseau ou développeur, avec une poursuite possible en licence ou directement en entreprise.
                    </p>

                    <div className="mt-6">
                        <h3 className="text-xl font-semibold">Option SISR – Solutions d’Infrastructure, Systèmes et Réseaux</h3>
                        <p>
                            Formation orientée administration réseau, sécurité et maintenance des équipements informatiques.
                        </p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Administrateur systèmes et réseaux</li>
                            <li>Technicien support / déploiement</li>
                            <li>Pilote d’exploitation</li>
                            <li>Technicien d’infrastructure ou micro et réseaux</li>
                        </ul>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-semibold">Option SLAM – Solutions Logicielles et Applications Métiers</h3>
                        <p>
                            Spécialisation développement d'applications : rédaction de cahiers des charges, développement, intégration.
                        </p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Développeur d’applications</li>
                            <li>Analyste programmeur</li>
                            <li>Responsable services applicatifs</li>
                            <li>Programmeur d’applications métiers</li>
                        </ul>
                    </div>
                </Section>
            </Element>

            <Element name='Parcours'>
                <Section title="Parcours">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Scolaire</h3>
                        <ul className="list-disc ml-6 space-y-1">
                            <li><strong>BTS SIO</strong> (2023 - aujourd'hui) – Lycée Sidoine Apollinaire, Clermont-Ferrand</li>
                            <li><strong>Bac Général NSI / Maths</strong> (2020 - 2023) – Lycée Madame de Staël, Montluçon</li>
                            <li><strong>Collège</strong>
                                <ul className="list-disc ml-6">
                                    <li>Emil Mâle, Commentry (2018 - 2020)</li>
                                    <li>George Clémenceau, Tulle (2016 - 2018)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-2xl font-semibold mb-2">Stages</h3>
                        <ul className="list-disc ml-6 space-y-1">
                            <li><strong>Xefi Ingénierie by IBO</strong> – mai à juin 2024</li>
                            <li><strong>Clinique des Cèdres</strong> – janvier à février 2025</li>
                        </ul>
                    </div>
                </Section>
            </Element>

            <Element name='Competences'>
                <Section title="Compétences">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Compétences en cours</h3>
                        <ul className="list-disc ml-6 space-y-1">
                            <li><strong>Cisco CLI :</strong> Configuration routeurs et switchs</li>
                            <li><strong>Gestion des permissions :</strong> FTP et SFTP</li>
                            <li><strong>Protocoles réseaux :</strong> Modèle OSI</li>
                            <li><strong>Virtualisation :</strong> VMware / VirtualBox</li>
                        </ul>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-2xl font-semibold mb-2">Compétences personnelles</h3>
                        <ul className="list-disc ml-6 space-y-1">
                            <li><strong>Containerisation :</strong> Docker</li>
                            <li><strong>Serveurs Linux :</strong> Serveurs Minecraft et web</li>
                            <li><strong>Programmation :</strong> Python, C++, C#, HTML/CSS/JS</li>
                        </ul>
                    </div>
                </Section>
            </Element>

            <Element name='Projets'>
                <Section title="Projets">
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>

                        {/* Web Radio */}
                        <Card className="shadow-lg h-auto">
                            <CardTitle>Web Radio</CardTitle>
                            <CardContent>Projet de 1ère année centré sur le streaming audio et la mise en place d’un serveur radio.</CardContent>
                            <CardFooter>
                                <Button variant="outline" onClick={() => setIsWebRadioOpen(true)}>Voir plus</Button>
                            </CardFooter>
                        </Card>

                        {/* Projet Casamance */}
                        <Card className="shadow-lg h-auto">
                            <CardTitle>Projet Casamance</CardTitle>
                            <CardContent>Préparation de 25 postes pour l'association <a href="https://solidarite-casamance.fr/" target="_blank" className="text-blue-500 underline">Les amis de la Casamance</a>.</CardContent>
                            <CardFooter>
                                <Button variant="outline" onClick={() => setIsCasamenceOpen(true)}>Voir plus</Button>
                            </CardFooter>
                        </Card>

                        {/* VPN */}
                        <Card className="shadow-lg h-auto">
                            <CardTitle>Mise en place d'un VPN</CardTitle>
                            <CardContent>Création et configuration d’un VPN fonctionnel dans un environnement d’entreprise simulé (2ème année).</CardContent>
                            <CardFooter>
                                <Button variant="outline" onClick={() => setIsVPNOpen(true)}>Voir plus</Button>
                            </CardFooter>
                        </Card>

                        {/* Projet réseau classe */}
                        <Card className="shadow-lg h-auto">
                            <CardTitle>Infrastructure réseau d’entreprise</CardTitle>
                            <CardContent>Projet de classe simulant le déploiement complet d’un SI dans une entreprise. (En cours)</CardContent>
                            <CardFooter>
                                <Button variant="outline" onClick={() => setIsOfficeNetworkOpen(true)}>En cours</Button>
                            </CardFooter>
                        </Card>

                        {/* Réseau entreprise perso */}
                        <Card className="shadow-lg h-auto">
                            <CardTitle>Réseau entreprise perso (stage 1A)</CardTitle>
                            <CardContent>Conception d’une structure réseau complète en autonomie durant mon premier stage.</CardContent>
                            <CardFooter>
                                <Button variant="outline" onClick={() => setIsNetworkOpen(true)}>Voir plus</Button>
                            </CardFooter>
                        </Card>

                        {/* Serveur Minecraft */}
                        <Card className="shadow-lg h-auto">
                            <CardTitle>Serveur Minecraft administré</CardTitle>
                            <CardContent>Mise en place et gestion d’un serveur Minecraft Linux (accès distant, permissions, modding).</CardContent>
                            <CardFooter>
                                <Button variant="outline" disabled>Voir plus</Button>
                            </CardFooter>
                        </Card>

                        {/* Serveur personnel */}
                        <Card className="shadow-lg h-auto">
                            <CardTitle>Création de serveur perso</CardTitle>
                            <CardContent>Projet en cours visant à héberger mes services persos à la maison (web, jeu, surveillance, etc).</CardContent>
                            <CardFooter>
                                <Button variant="outline" disabled>En cours</Button>
                            </CardFooter>
                        </Card>

                        {/* Lien Github */}
                        <Card className="shadow-lg h-auto">
                            <CardTitle>Mes projets sur GitHub</CardTitle>
                            <CardContent>Retrouvez mes projets personnels, mini scripts et contributions open-source sur mon profil.</CardContent>
                            <CardFooter>
                                <Button variant="default" asChild>
                                    <a href="https://github.com/sticot19" target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </Section>
            </Element>

            <Element name='Epreuves'>
                <Section title="Épreuves">
                    <ul className="list-disc ml-6 space-y-2">
                        <li><strong>E4 :</strong> Épreuve centrée sur la mise en œuvre de solutions techniques à partir d’un cahier des charges.</li>
                        <li><strong>E5 :</strong> Épreuve de projet encadré où l’on doit développer, documenter et présenter un projet complet en équipe ou individuellement.</li>
                    </ul>
                </Section>
            </Element>

            <Element name='Contact'>
                <footer className="bg-gray-900 text-white py-10 text-center">
                    <h2 className="text-2xl font-semibold">Contact</h2>
                    <div className="flex justify-center gap-6 mt-4">
                        <a href="mailto:dumond.camille@gmail.com" aria-label="Mail">
                            <Mail className="w-6 h-6 hover:text-blue-400 transition-colors" />
                        </a>
                        <a href="https://github.com/sticot19" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="w-6 h-6 hover:text-gray-300 transition-colors" />
                        </a>
                        <a href="https://www.linkedin.com/in/camille-dumond" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="w-6 h-6 hover:text-blue-500 transition-colors" />
                        </a>
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
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, illo soluta? Eligendi dignissimos mollitia corrupti debitis, repudiandae atque nemo ea odit! Id nisi voluptatibus, voluptatem commodi cumque iste dolorum amet.</p>
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
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, illo soluta? Eligendi dignissimos mollitia corrupti debitis, repudiandae atque nemo ea odit! Id nisi voluptatibus, voluptatem commodi cumque iste dolorum amet.</p>
                </DialogueContent>
                <DialogueFooter>
                    <Button variant="outline" onClick={() => setIsCasamenceOpen(false)}>Fermer</Button>
                </DialogueFooter>
            </Dialogue>

            <Dialogue isOpen={isVPNOpen} onClose={() => setIsVPNOpen(false)}>
                <DialogueTitle>VPN d'entreprise</DialogueTitle>
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
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, illo soluta? Eligendi dignissimos mollitia corrupti debitis, repudiandae atque nemo ea odit! Id nisi voluptatibus, voluptatem commodi cumque iste dolorum amet.</p>
                </DialogueContent>
                <DialogueFooter>
                    <Button variant="outline" onClick={() => setIsVPNOpen(false)}>Fermer</Button>
                </DialogueFooter>
            </Dialogue>

            <Dialogue isOpen={isOfficeNetworkOpen} onClose={() => setIsOfficeNetworkOpen(false)}>
                <DialogueTitle>Infrastructure réseau d'entreprise</DialogueTitle>
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
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, illo soluta? Eligendi dignissimos mollitia corrupti debitis, repudiandae atque nemo ea odit! Id nisi voluptatibus, voluptatem commodi cumque iste dolorum amet.</p>
                </DialogueContent>
                <DialogueFooter>
                    <Button variant="outline" onClick={() => setIsOfficeNetworkOpen(false)}>Fermer</Button>
                </DialogueFooter>
            </Dialogue>

            <Dialogue isOpen={isNetworkOpen} onClose={() => setIsNetworkOpen(false)}>
                <DialogueTitle>Infrastructure réseau d'entreprise</DialogueTitle>
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
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, illo soluta? Eligendi dignissimos mollitia corrupti debitis, repudiandae atque nemo ea odit! Id nisi voluptatibus, voluptatem commodi cumque iste dolorum amet.</p>
                </DialogueContent>
                <DialogueFooter>
                    <Button variant="outline" onClick={() => setIsNetworkOpen(false)}>Fermer</Button>
                </DialogueFooter>
            </Dialogue>

        </div>
    );
};

export default App;
