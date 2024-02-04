import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const users = [
  {
    name: 'Guilherme Queiróz',
    email: 'gaqueirozdev@gmail.com',
    password: 'teste123',
    imageUrl: 'https://unsplash.it/400/400',
  },
  {
    name: 'Aline Barros',
    email: 'alinebarros@gmail.com',
    password: 'teste123',
    imageUrl: 'https://unsplash.it/400/400',
  },
  {
    name: 'Eder Alfredo Gomes',
    email: 'edergomer@gmail.com',
    password: 'teste123',
    imageUrl: 'https://unsplash.it/400/400',
  }
]

const goal = {
  startDate: '2024-02-01',
  endDate: '2024-02-29'
}

const tasks = [
  {
    title: 'Beber 3L de água por dia',
    description: 'Lorem ipsum dolor sit amet.',
    periodicity: 'daily',
    minimalConclusions: 7,
    concludedWeekdays: ''
  },
  {
    title: '30\' de exercício 3x na semana',
    description: 'Lorem ipsum dolor sit amet.',
    periodicity: 'weekly',
    minimalConclusions: 3,
    concludedWeekdays: '0,1,3'
  },
  {
    title: 'Devocional 3x na semana',
    description: 'Lorem ipsum dolor sit amet.',
    periodicity: 'weekly',
    minimalConclusions: 3,
    concludedWeekdays: '4'
  },
]

const weekdays = [
  { weekdayName: 'Sunday' },
  { weekdayName: 'Monday' },
  { weekdayName: 'Tuesday' },
  { weekdayName: 'Wednesday' },
  { weekdayName: 'Thursday' },
  { weekdayName: 'Friday' },
  { weekdayName: 'Saturday' }
]

const goalUserId: string[] = []
let tasksGoalId: string = ''
 
async function main () {
  //users seed
  for (const user of users) {
    const response = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        imageUrl: user.imageUrl
      }
    })

    goalUserId.push(response.id)
  }

  //weekdays seed
  for (const weekday of weekdays) {
    await prisma.weekday.create({
      data: { weekdayName: weekday.weekdayName }
    })    
  }

  //goal seed
  const response = await prisma.goal.create({
    data: {
      startDate: goal.startDate,
      endDate: goal.endDate,
      user: {
        connect: {
          id: goalUserId[0],
        }
      }
    }
  })

  tasksGoalId = response.id

  for (const task of tasks) {
    await prisma.task.create({
      data: {
        title: task.title,
        description: task.description,
        periodicity: task.periodicity,
        minimalConclusions: task.minimalConclusions,
        concludedWeekdays: task.concludedWeekdays,
        goal: {
          connect: {
            id: tasksGoalId
          }
        }
      }
    })
  }
}

main()