/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Projects = "projects",
	Rewards = "rewards",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ProjectsRecord<Tauthor = unknown> = {
	uid: string
	status?: string
	detail_description?: string
	detail_images?: string[]
	user?: RecordIdString
	rewards?: RecordIdString[]
	title?: string
	description?: string
	image?: string
	city?: string
	goal?: number
	duration?: number
	backed?: number
	launched?: boolean
	category?: string
	earned?: number
	comments?: number
	author?: null | Tauthor
}

export type RewardsRecord = {
	user: RecordIdString
	project: RecordIdString
	uid: string
	title?: string
	description?: string
	how_to_get?: string
	image?: string
	cost?: number
	count?: number
	bought?: number
	sending?: IsoDateString
}

export type UsersRecord = {
	name?: string
	avatar?: string
	phone?: number
	city?: string
	website?: string
	instagram?: string
	telegram?: string
	bio?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ProjectsResponse<Tauthor = unknown, Texpand = unknown> = Required<ProjectsRecord<Tauthor>> & BaseSystemFields<Texpand>
export type RewardsResponse<Texpand = unknown> = Required<RewardsRecord> & BaseSystemFields<Texpand>
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	projects: ProjectsRecord
	rewards: RewardsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	projects: ProjectsResponse
	rewards: RewardsResponse
	users: UsersResponse
}