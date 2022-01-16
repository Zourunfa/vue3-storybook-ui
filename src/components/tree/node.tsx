import { defineComponent } from 'vue';
import { TreeNodePorps } from './types';

const props = TreeNodePorps();
export default defineComponent({
  name: 'TreeNode',
  props: props,
  emits: ['toggle-expand'],
  setup(props, { emit }) {
    return () => {
      const { node } = props;
      const handleExpand = () => {
        emit('toggle-expand', props.node);
      };
      const renderArrow = () => {
        return (
          <div
            class={['node-arrow', props.node?.expanded ? 'expanded' : '']}
            onClick={handleExpand}
          >
            {node!.hasChildren ? <i class="iconfont iconExpand"></i> : null}
          </div>
        );
      };

      return (
        <div
          class="af-tree-node"
          style={{ paddingLeft: node!.level * 18 + 'px' }}
          key={node!.nodeKey}
        >
          {renderArrow()}
          <div class="node-content node-text">
            <div class="node-title">{node!.name}</div>
          </div>
        </div>
      );
    };
  },
});
