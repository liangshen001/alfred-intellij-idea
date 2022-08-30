import alfred, {OutputItem} from "@liangshen/alfred";
import {getRecentProjects} from "@liangshen/jetbrains"

const items: OutputItem[] = [{arg: '', title: 'Open', subtitle: ''}]
try {
    const recentProjects = await getRecentProjects('IntelliJIdea');
    items.push(...recentProjects.reverse().map(i => ({
        arg: i.path,
        title: `${i.name}${i.opened ? '(opened)' : ''}`,
        subtitle: i.path
    })));
} catch (e) {
}
alfred.output({items}, ['title']);