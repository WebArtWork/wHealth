import { CrudDocument } from 'wacom';

export interface Healthcomment extends CrudDocument {
	name: string;
	description: string;
}