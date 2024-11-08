<script setup lang="ts">
import { Icon } from '@iconify/vue';

const skills: {
  category: string;
  skills: { label: string; icon?: string }[];
}[] = [
  {
    category: 'Languages',
    skills: [
      { label: 'TypeScript', icon: 'devicon:typescript' },
      { label: 'JavaScript', icon: 'devicon:javascript' },
      { label: 'Java', icon: 'devicon:java' },
      { label: 'Bash', icon: 'devicon:bash' },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { label: 'Express', icon: 'devicon:express' },
      { label: 'NestJS', icon: 'devicon:nestjs' },
      { label: 'React Native', icon: 'devicon:react' },
      { label: 'Spring', icon: 'devicon:spring' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { label: 'MySQL', icon: 'devicon:mysql' },
      { label: 'PostgreSQL', icon: 'devicon:postgresql' },
      { label: 'mongoDB', icon: 'devicon:mongodb' },
      { label: 'redis', icon: 'devicon:redis' },
    ],
  },
  {
    category: 'Testing & CI/CD',
    skills: [
      { label: 'Jest', icon: 'skill-icons:jest' },
      { label: 'CircleCI', icon: 'devicon-plain:circleci' },
      { label: 'Github Actions', icon: 'devicon:githubactions' },
    ],
  },
  {
    category: 'Other',
    skills: [
      { label: 'Docker', icon: 'devicon:docker' },
      { label: 'AWS', icon: 'skill-icons:aws-light' },
      { label: 'Git', icon: 'devicon:git' },
      { label: 'Linux', icon: 'devicon:linux' },
    ],
  },
];
</script>

<template>
  <main class="max-w-screen-md p-6 self-center gap-4">
    <h1 class="text-3xl font-bold">O que faço?</h1>
    <p>
      Eu trabalho como Senior Software Developer com uma equipa remota e com
      elementos situados em diversos países.
    </p>
    <p>
      Neste momento o meu foco principal tem sido no desenvolvimento de serviços
      web, em arquitetura de microsserviços e em ambiente cloud, e de aplicações
      para dispositivos móveis. Algumas das princiapais tecnologias, linguagens
      e ferramentas que utilizo no meu dia a dia são:
    </p>

    <div class="flex flex-row flex-wrap gap-10 self-center justify-center p-4">
      <ul v-for="item in skills" v-bind:key="item.category">
        <p class="underline font-medium text-lg mb-2">{{ item.category }}</p>
        <li
          v-for="skill in item.skills"
          v-bind:key="skill.label"
          class="flex flex-row items-center gap-2 p-2 last:border-b-0 border-b border-slate-200"
        >
          <Icon v-if="!!skill.icon" :icon="skill.icon" class="text-2xl" />
          <span class="text-sm">{{ skill.label }}</span>
        </li>
      </ul>
    </div>
  </main>
</template>
