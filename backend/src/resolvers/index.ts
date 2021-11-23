import BD from '../database'
import userInterface from '../interfaces/user'

export const resolvers = {
  Query: {
    list: (_, { name = '' }: { _: any; name: string }) =>
      BD.filter((dados: userInterface) => dados.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())),
    user: (_, { id }: { _: any; id: string }) => BD.filter((dados: userInterface) => dados._id === id)[0],
  },
}
