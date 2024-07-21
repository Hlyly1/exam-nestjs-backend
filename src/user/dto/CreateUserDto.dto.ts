type UserCollectionType = {
  id: number;
  name: string;
  phone: string;
  vChat: string;
  avatar: string;
  graduation_time: string;
  money: number;
  role: string;
  has_person_info: boolean;
  edu: string;
  techStack: string;
  createTime: Date;
  updateTime: Date;
};

export type CreateUserDto = Pick<
  UserCollectionType,
  'phone' | 'role' | 'has_person_info'
>;

export type UpdateUserDto = Partial<UserCollectionType>;
export type SearchUserDto = Partial<UserCollectionType>;

export type HttpUserCreate = Pick<
  UserCollectionType,
  'phone' | 'role' | 'has_person_info' | 'avatar' | 'money'
>;

export type HttpUserInfoPost = Pick<
  UserCollectionType,
  'name' | 'vChat' | 'graduation_time' | 'money'
> & {
  avatar?: string;
};
