import { __decorate, __param } from "tslib";
import { Inject, Injectable, Optional } from "@angular/core";
import { TranslateCompiler } from "@ngx-translate/core";
import * as MessageFormat from "messageformat";
import { defaultConfig, MESSAGE_FORMAT_CONFIG } from "./message-format-config";
/**
 * This compiler expects ICU syntax and compiles the expressions with messageformat.js
 */
let TranslateMessageFormatCompiler = class TranslateMessageFormatCompiler extends TranslateCompiler {
    constructor(config) {
        super();
        const { locales, formatters, biDiSupport, strictNumberSign } = Object.assign(Object.assign({}, defaultConfig), config);
        this.messageFormat = new MessageFormat(locales);
        if (formatters) {
            this.messageFormat.addFormatters(formatters);
        }
        if (biDiSupport) {
            this.messageFormat.setBiDiSupport(biDiSupport);
        }
        if (strictNumberSign) {
            this.messageFormat.setStrictNumberSign(strictNumberSign);
        }
    }
    compile(value, lang) {
        return this.messageFormat.compile(value, lang);
    }
    compileTranslations(translations, lang) {
        return this.messageFormat.compile(translations, lang);
    }
};
TranslateMessageFormatCompiler.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MESSAGE_FORMAT_CONFIG,] }] }
];
TranslateMessageFormatCompiler = __decorate([
    Injectable(),
    __param(0, Optional()),
    __param(0, Inject(MESSAGE_FORMAT_CONFIG))
], TranslateMessageFormatCompiler);
export { TranslateMessageFormatCompiler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLW1lc3NhZ2UtZm9ybWF0LWNvbXBpbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRyYW5zbGF0ZS1tZXNzYWdlZm9ybWF0LWNvbXBpbGVyLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS1tZXNzYWdlLWZvcm1hdC1jb21waWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sS0FBSyxhQUFhLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFDTCxhQUFhLEVBRWIscUJBQXFCLEVBQ3RCLE1BQU0seUJBQXlCLENBQUM7QUFFakM7O0dBRUc7QUFFSCxJQUFhLDhCQUE4QixHQUEzQyxNQUFhLDhCQUErQixTQUFRLGlCQUFpQjtJQUduRSxZQUdFLE1BQTRCO1FBRTVCLEtBQUssRUFBRSxDQUFDO1FBRVIsTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLG1DQUN2RCxhQUFhLEdBQ2IsTUFBTSxDQUNWLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWhELElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLFdBQVcsRUFBRTtZQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDO0lBRU0sT0FBTyxDQUFDLEtBQWEsRUFBRSxJQUFZO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTSxtQkFBbUIsQ0FBQyxZQUFpQixFQUFFLElBQVk7UUFDeEQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUNGLENBQUE7OzRDQS9CSSxRQUFRLFlBQ1IsTUFBTSxTQUFDLHFCQUFxQjs7QUFMcEIsOEJBQThCO0lBRDFDLFVBQVUsRUFBRTtJQUtSLFdBQUEsUUFBUSxFQUFFLENBQUE7SUFDVixXQUFBLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0dBTHJCLDhCQUE4QixDQW1DMUM7U0FuQ1ksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVDb21waWxlciB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5pbXBvcnQgKiBhcyBNZXNzYWdlRm9ybWF0IGZyb20gXCJtZXNzYWdlZm9ybWF0XCI7XG5pbXBvcnQge1xuICBkZWZhdWx0Q29uZmlnLFxuICBNZXNzYWdlRm9ybWF0Q29uZmlnLFxuICBNRVNTQUdFX0ZPUk1BVF9DT05GSUdcbn0gZnJvbSBcIi4vbWVzc2FnZS1mb3JtYXQtY29uZmlnXCI7XG5cbi8qKlxuICogVGhpcyBjb21waWxlciBleHBlY3RzIElDVSBzeW50YXggYW5kIGNvbXBpbGVzIHRoZSBleHByZXNzaW9ucyB3aXRoIG1lc3NhZ2Vmb3JtYXQuanNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZU1lc3NhZ2VGb3JtYXRDb21waWxlciBleHRlbmRzIFRyYW5zbGF0ZUNvbXBpbGVyIHtcbiAgcHJpdmF0ZSBtZXNzYWdlRm9ybWF0OiBNZXNzYWdlRm9ybWF0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChNRVNTQUdFX0ZPUk1BVF9DT05GSUcpXG4gICAgY29uZmlnPzogTWVzc2FnZUZvcm1hdENvbmZpZ1xuICApIHtcbiAgICBzdXBlcigpO1xuXG4gICAgY29uc3QgeyBsb2NhbGVzLCBmb3JtYXR0ZXJzLCBiaURpU3VwcG9ydCwgc3RyaWN0TnVtYmVyU2lnbiB9ID0ge1xuICAgICAgLi4uZGVmYXVsdENvbmZpZyxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH07XG5cbiAgICB0aGlzLm1lc3NhZ2VGb3JtYXQgPSBuZXcgTWVzc2FnZUZvcm1hdChsb2NhbGVzKTtcblxuICAgIGlmIChmb3JtYXR0ZXJzKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VGb3JtYXQuYWRkRm9ybWF0dGVycyhmb3JtYXR0ZXJzKTtcbiAgICB9XG4gICAgaWYgKGJpRGlTdXBwb3J0KSB7XG4gICAgICB0aGlzLm1lc3NhZ2VGb3JtYXQuc2V0QmlEaVN1cHBvcnQoYmlEaVN1cHBvcnQpO1xuICAgIH1cbiAgICBpZiAoc3RyaWN0TnVtYmVyU2lnbikge1xuICAgICAgdGhpcy5tZXNzYWdlRm9ybWF0LnNldFN0cmljdE51bWJlclNpZ24oc3RyaWN0TnVtYmVyU2lnbik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBpbGUodmFsdWU6IHN0cmluZywgbGFuZzogc3RyaW5nKTogKHBhcmFtczogYW55KSA9PiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1lc3NhZ2VGb3JtYXQuY29tcGlsZSh2YWx1ZSwgbGFuZyk7XG4gIH1cblxuICBwdWJsaWMgY29tcGlsZVRyYW5zbGF0aW9ucyh0cmFuc2xhdGlvbnM6IGFueSwgbGFuZzogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlRm9ybWF0LmNvbXBpbGUodHJhbnNsYXRpb25zLCBsYW5nKTtcbiAgfVxufVxuIl19