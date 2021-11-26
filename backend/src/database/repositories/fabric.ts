import { User as UserModel } from '../../routes/users/types'
import { User as UserEntity } from '../entity/User'

export const toModel = (user: UserEntity): UserModel => ({
  id: user.id,
  name: user.name,
  avatar: user.avatar,
})

export const toEntity = (user: UserModel): UserEntity => {
  const entity = new UserEntity()

  entity.name = user.name
  entity.avatar = user.avatar

  return entity
}
