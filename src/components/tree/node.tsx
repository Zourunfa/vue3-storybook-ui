import classNames from 'classnames';
import { textChangeRangeIsUnchanged } from 'typescript';
import { computed, defineComponent, ref } from 'vue';
import { nodeKey, TreeNodePorps } from './types';
import RenderNode from './render';

const props = TreeNodePorps();
export default defineComponent({
  name: 'TreeNode',
  props: props,
  emits: ['toggle-expand', 'select-change', 'check-change'],
  setup(props, { emit }) {
    return () => {
      const { node, render, iconSlot } = props;

      const handleExpand = () => {
        emit('toggle-expand', props.node);
      };
      const renderArrow = () => {
        return (
          <div class={['node-arrow', props.node?.expanded ? 'expanded' : '']}>
            {node!.hasChildren ? (
              iconSlot ? (
                iconSlot(node?.loading)
              ) : node?.loading ? (
                <i class="iconfont iconloading ico-loading"></i>
              ) : (
                <i class="iconfont iconExpand"></i>
              )
            ) : null}
          </div>
        );
      };
      const titleClasses = classNames('node-title', {
        disabled: node?.disabled,
        selected: node?.selected,
      });

      const handleSelect = (e: MouseEvent) => {
        e.stopPropagation(); //组织展开事件触发
        e.preventDefault();

        emit('select-change', props.node);
      };

      const renderContent = () => {
        return (
          <div onClick={handleSelect} class="node-content node-text">
            {render ? (
              <RenderNode render={render} node={node}></RenderNode>
            ) : (
              <div class={titleClasses}>{node!.name}</div>
            )}
          </div>
        );
      };

      return (
        <div
          class="af-tree-node"
          style={{ paddingLeft: node!.level * 18 + 'px' }}
          key={node!.nodeKey}
          onClick={handleExpand}
        >
          {renderArrow()}
          {renderContent()}
        </div>
      );
    };
  },
});
