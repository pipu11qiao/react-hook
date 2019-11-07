const obj = {
    markdown: `
                    <dl>
                        <dt><a href="#exam">exam</a> : <code>object</code></dt>
                        <dd><p>mathjax 相关</p>
                        </dd>
                    </dl>

                    ## Constants

                    <dl>
                        <dt><a href="#get_uri_of_oss_img">get_uri_of_oss_img</a> ⇒ <code>string</code></dt>
                        <dd><p>补足oss图片的url</p>
                        </dd>
                        <dt><a href="#SUBQ">SUBQ</a></dt>
                        <dd><p>小题题号①②....</p>
                        </dd>
                        <dt><a href="#check_ans_has_img">check_ans_has_img</a></dt>
                        <dd><p>{
                            originHtml, // 最原始的html
                            choice, // 是否是选择题
                            stemHtml, // 题干部分
                            stemWidthInfoHtml, // 只删除选项部分的试题
                            optionsHtml, // 选项部分 [{label:&#39;A&#39;,content: &#39;内容&#39;}++] label 是选项 content 是选项内容
                        }</p>
                        </dd>
                    </dl>

                    <a name="exam"></a>

                    ## exam : <code>object</code>
                    mathjax 相关

                    **Kind**: global namespace
                    <a name="get_uri_of_oss_img"></a>

                    ## get\_uri\_of\_oss\_img ⇒ <code>string</code>
                    补足oss图片的url

                    **Kind**: global constant
                    **Returns**: <code>string</code> - 补充完整的url

                    | Param | Type | Description |
                    | --- | --- | --- |
                    | _key | <code>string</code> | 后台传入的url |
                    | prefix | <code>string</code> | //url的前缀，默认是 ‘http://’ |

                    <a name="SUBQ"></a>

                    ## SUBQ
                    小题题号①②....

                    **Kind**: global constant
                    **Properties**

                    | Type | Description |
                    | --- | --- |
                    | <code>Array.&lt;string&gt;</code> | 小题号数组 [① ，② ，...] |

                    <a name="check_ans_has_img"></a>

                    ## check\_ans\_has\_img
                    {
                        originHtml, // 最原始的html
                        choice, // 是否是选择题
                        stemHtml, // 题干部分
                        stemWidthInfoHtml, // 只删除选项部分的试题
                        optionsHtml, // 选项部分 [{label:'A',content: '内容'}++] label 是选项 content 是选项内容
                    }
 
                    `
}
export default obj;