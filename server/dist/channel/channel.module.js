"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelModule = void 0;
const common_1 = require("@nestjs/common");
const channel_controller_1 = require("./channel.controller");
const channel_service_1 = require("./channel.service");
const user_entity_1 = require("../entities/user.entity");
const member_entity_1 = require("../entities/member.entity");
const guild_entity_1 = require("../entities/guild.entity");
const channel_entity_1 = require("../entities/channel.entity");
const typeorm_1 = require("@nestjs/typeorm");
const socket_module_1 = require("../socket/socket.module");
const pcmember_entity_1 = require("../entities/pcmember.entity");
const dmmember_entity_1 = require("../entities/dmmember.entity");
let ChannelModule = class ChannelModule {
};
ChannelModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([channel_entity_1.Channel, guild_entity_1.Guild, member_entity_1.Member, user_entity_1.User, pcmember_entity_1.PCMember, dmmember_entity_1.DMMember]),
            socket_module_1.SocketModule
        ],
        controllers: [channel_controller_1.ChannelController],
        providers: [channel_service_1.ChannelService]
    })
], ChannelModule);
exports.ChannelModule = ChannelModule;
//# sourceMappingURL=channel.module.js.map